<?php

namespace App\Services;

use ActiveCampaign as AC;
use Illuminate\Http\Request;

class ActiveCampaign
{
    public $ac;

    public function __construct()
    {
        $this->ac = new AC(config('abbio.services.newsletter.url'), config('abbio.services.newsletter.key'));
    }

    public function subscribe($type = [])
    {
        $list_id = (int) 2; //prospects

        $contact = [
          'email'               => request('email'),
          'tags'                => $type,
          'first_name'           => request('first_name'),
          'last_name'           => request('last_name'),
          'phone'           => request('phone'),
          'field[1,0]'          => request('organisation'),
          "p[{$list_id}]"       => $list_id,
          "status[{$list_id}]"  => 1,
        ];  


        $newContact = $this->process('contact/sync', $contact);

        if (! $newContact) {
            return false;
        }

        return true;
    }

    public function convert()
    {
        // first remove trial tag.
        $this->removeTag('FREEMIUM');

        // second add customer tag.
        $this->addTag('CUSTOMER');
    }

    public function lost()
    {
        // first remove trial tag.
        $this->removeTag('CUSTOMER');

        // second add customer tag.
        $this->addTag('FREEMIUM');
    }

    public function addTag($tag)
    {
        $contact = [
          'email' => $this->user->email,
          'tags' => $tag,
        ];

        $this->process('contact/tag_add', $contact);
    }

    public function removeTag($tag)
    {
        $contact = [
        'email' => $this->user->email,
        'tags' => $tag,
      ];

        $this->process('contact/tag_remove', $contact);
    }

    protected function process($endpoint, $contactData)
    {
        $request = $this->ac->api($endpoint, $contactData);

        dd($request);
        if (! (int) $request->success) {
            return false;
        }

        return true;
    }
}