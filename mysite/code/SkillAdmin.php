<?php

class SkillAdmin extends ModelAdmin {
  private static $managed_models = array('Skill'); // Can manage multiple models
  private static $url_segment = 'skills'; // Linked as /admin/products/
  private $menu_title = 'Skills';
}