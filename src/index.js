$.getJSON(
  "http://www.reddit.com/r/Overwatch/.json?jsonp=?",
  function redd(info) {
    $.each(
      info.data.children.slice(0, 10),
      function (req, res) {
        var group = $('<div class="pile"></div>');
          if (res.data.thumbnail === 'self' || res.data.thumbnail=== null){
            group.append($('<img class="thumbplace"></img>').attr('src', 'assets/reinhardt.png').text(res.data.thumbnail));
          } else {
            group.append($('<img class="thumbs"></img>').attr('src', res.data.thumbnail).text(res.data.thumbnail));
          }
        group.append($('<h2></h2>').text(res.data.title));
        group.append($('<p></p>').text(res.data.author));
        group.append($('<p></p>').text(res.data.created));
        group.append($('<p></p>').text(res.data.type));
        group.append($('<a></a>').attr('href', res.data.url).text(res.data.url));

        $(".reddit").append(group);
      }
    )
  }
)
