<?php
class ActivityFeedAdmin extends ModelAdmin {
  private static $managed_models = array('TwitterFeed', 'GitHubFeed'); // Can manage multiple models
  private static $url_segment = 'Feeds'; // Linked as /admin/products/
  private static $menu_title = 'Feeds';
}