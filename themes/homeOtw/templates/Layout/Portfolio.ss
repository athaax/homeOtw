
      <div class="row" id="portfolio-body" >

        <div class="medium-5 columns">
          <section style="text-align: center;">
            <h1> {{project.project.title}} </h1>
            <ul class="button-group round" style="display: inline-block;">
              <li><a href="{{project.project.website}}" class="radius small button">View Live</a></li>
              <li><a href="{{project.project.github}}" class="radius small button">View on GitHub</a></li>
            </ul>
          </section>
          <section>
            <h2 class="headline"> Skills </h2>
            <ul class="skill-list">
              <li ng-repeat="(key, value) in project.project.Skills">
                <a ng-click="getSkill({{key}})" class="tiny button"> {{value}} </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="headline"> Background </h2>
            <p> {{project.project.Content}} </p>
          </section>
          <section>
            <h2 class="headline">Contributions</h2>
            <p> {{project.project.History}} </p>
          </section>
        </div>
        <div class="medium-7 columns">
          <img src="{{project.project.image}}" alt="Image for {{project.project.title}}" />
        </div>

      </div>

            <%--
      <div class="row">
        <div class="small-12 columns">
          <ul class="inline-list">
            <li ng-repeat="commit in project.project.ContributionFeed">
                <!-- need plugin to render html... trying to keep this lightweight 
                ---- I want to display commits I've made on this project, however API is returning 
                ---- ALL commits made to this repo, and it's not coming back very atomically.
                ---- NOTE: I'm currently stripping content HTML tags in GitHubFeed.php
                -->
                <!--<div ng-bind-html-unsafe="commit.Content"></div>-->
                <!--<p>{{commit.ID}}</p>-->
                <div class="git panel" style="max-width: 200px;">
                  <p>{{commit.Content}}</p>
                  <p>Published at $PublishedAt.Format('g:ia \o\n l jS F Y')</p>
                </div>  
            </li>
          </ul>
        </div>    
      </div>
      --%>