<?php
//For more information please refer to https://github.com/checkout/checkout-sdk-php

use Checkout\\Balances\\BalancesQuery;
use Checkout\\CheckoutApiException;
use Checkout\\CheckoutAuthorizationException;
use Checkout\\CheckoutSdk;
use Checkout\\Common\\Currency;
use Checkout\\Environment;
use Checkout\\OAuthScope;

$api = CheckoutSdk::builder()->oAuth()
    ->clientCredentials("client_id", "client_secret")
    ->scopes([OAuthScope::$Balances])
    ->environment(Environment::sandbox())
    ->build();

$query = new BalancesQuery();
$query->query = "currency:" . Currency::$GBP;

try {
    $response = $api->getBalancesClient()->retrieveEntityBalances("entity_id", $query);
} catch (CheckoutApiException $e) {
    // API error
    $error_details = $e->error_details;
    $http_status_code = isset($e->http_metadata) ? $e->http_metadata->getStatusCode() : null;
} catch (CheckoutAuthorizationException $e) {
    // Bad Invalid authorization
}