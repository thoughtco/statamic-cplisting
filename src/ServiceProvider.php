<?php

namespace Thoughtco\CPListing;

use File;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../resources/dist/cplisting.js'
    ];
}
