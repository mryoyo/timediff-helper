TimeDiff
===================

A simple helper that displays duration between now and your another timestamp reactively.

## Install

````
$ meteor add mryoyo:timediff
````

## Example

in yourtemplate.html

````handlebars
{{#each posts}}
<div class="post">
  <h4>{{title}}</h4>
  <span>{{diffNowHumanize createdAt}}</span>
  <p>{{content}}</p>
</div>
{{/each}}
````

All available helpers:

* `{{diffNow}}` - will return something like `+1:10:45` or `-0:20:15`.

* `{{diffNowNoSign}}` - returns `10:20:15`.

* `{{diffNowHumanize}}` - uses moment.js humanize() and returns `a hour ago`.