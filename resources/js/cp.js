import CPListing from "./components/CPListing";
Statamic.booting(() => {
    Statamic.$components.register("cp-listing", CPListing);
});
