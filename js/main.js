// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


// Save bookmarks
function saveBookmark(e) {
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

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

        //Add to array
        bookmarks.push(bookmark);

        //Set to LocalStoraget
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        // Add bookmarks to array
        bookmarks.push(bookmark);

        //Re-set back to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    // Prevent form from submitting
    e.preventDefault();
};