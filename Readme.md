# CP Listing

Provides a `<cp-listing>` component to use within Statamic v3 for searchable, filterable listing views.

To install:

```
composer require thoughtco/statamic-cplisting
```

Then run `composer update`


To use:

```blade
   <cp-listing 
        :filters="{{ $filters->toJson() }}"
        :listing-config="{{
            collect([
                'preferencesPrefix' => 'namespace.myurl',
                'requestUrl' => 'namespace/api/myurl',
                'editUrl' => 'namespace/myurl/edit/',
                'deleteUrl' => 'namespace/myurl/delete/',
                'listingUrl' => 'namespace/myurl',
            ])->toJson()
        }}"
    ></cp-listing>
```