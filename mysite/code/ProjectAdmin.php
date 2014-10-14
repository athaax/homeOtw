<?php
class ProjectAdmin extends ModelAdmin {
  private static $managed_models = array('Project'); // Can manage multiple models
  private static $url_segment = 'projects'; // Linked as /admin/products/
  private static $menu_title = 'Projects';
}