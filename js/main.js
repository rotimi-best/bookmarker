// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


// Save bookmarks
function saveBookmark(e) {
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    /* Local storage test
    localStorage.setItem('test', 'HEY BRO');
    localStorage.getItem('test');
    localStorage.removeItem('test'); 
    */

    // Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        // Init bookmark array
        var bookmarks = [];

        // Add to array
        bookmarks.push(bookmark);

        // Set to LocalStoraget
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // Add bookmarks to array
        bookmarks.push(bookmark);

        // Re-set back to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Re-fetch bookmarks
    fetchBookmarks();
    
    // Prevent form from submitting
    e.preventDefault();
}

// Delete Bookmark
function deleteBookmark(url) {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }

    // Re-set back to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
}

// Get Bookmarks
function fetchBookmarks() {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get output id
    var bookmarksResult = document.getElementById('bookmarksResult');

    // Build output
    bookmarksResult.innerHTML = '';
    
    // Loop through bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResult.innerHTML += '<div class="well">'+
                                      '<h3>'+ name +
                                      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+
                                      '</h3>'+
                                      '</div>'
    }
}

// Validate form 
function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('Please use a valid url');
        return false;
    }

    return true;
}