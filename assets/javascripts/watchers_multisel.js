function checkAll(name)
{
    var boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++)
        boxes[i].checked = true ;
    _toggleWatchingAll(true);
    return false;
}

function uncheckAll(name)
{
    var boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++)
        boxes[i].checked = false ;
    _toggleWatchingAll(false);
    return false;
}

function _toggleWatchingAll(watching)
{
  var watchers = $('watchers').getElementsByTagName('li');
  for (var i = 0; i < watchers.length; i++) {
      if (!watching) {
        watchers[i].addClassName('not_watching');
      } else {
        watchers[i].removeClassName('not_watching');
      }
  }
}

function _selected(id)
{
    var key = $(id);
    return key.options[key.selectedIndex].value.split(',');
}

function _toggleSelected(selected, watching)
{
  for (var i = 0; i < selected.length; i++) {
    console.log('Looking for #user_' + selected[i]);
    var user = $('user_' + selected[i]);
    if (user != null) {
      if (!watching) {
        user.addClassName('not_watching');
      } else {
        user.removeClassName('not_watching');
      }
      console.log('Watching set to ' + watching);
    }
    else {
      console.log('not found');
    }
  }
}

function checkSome(name)
{
    var selected_values = _selected('watcher_multiple_group');
    var boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++){
        for (j = 0; j < selected_values.length; j++){
            if(boxes[i].value == selected_values[j]) boxes[i].checked = true ;
        }
    }
    _toggleSelected(selected_values, true/*watching*/);
    return false;
}

function uncheckSome(name)
{
    var selected_values = _selected('watcher_multiple_group');
    var boxes=document.getElementsByName(name)
    for (i = 0; i < boxes.length; i++){
        for (j = 0; j < selected_values.length; j++){
            if(boxes[i].value == selected_values[j]) boxes[i].checked = false ;
        }
    }
    _toggleSelected(selected_values, false/*not watching*/);
    return false;
}
