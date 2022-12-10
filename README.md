
To use the SASS library built, as it is: drop the "agoSASS" folder in the project folder, and then watch the folder in the "gulpfile.js" file.


Customizing The SASS Library Built: create a new folder "custOwnSASS" with an "index.scss" file in it. Any changes to be made will be made inside the file.
Now, inside the "gulpfile.js" instead of watching the "agoSASS" folder, watch the "custOwnSASS" folder; the "buildStyles" function should be
"return src("custOwnSASS/**/*.scss")"
instead of
"return src("agoSASS/**/*.scss")".

And the "watchTask" function should be
"watch( [ "custOwnSASS/**/*.scss", ".html" ], buildStyles )"
instead of
"watch( [ "agoSASS/**/*.scss", ".html" ], buildStyles )".

This will now compile the "index.scss" file inside the "custOwnSASS" folder instead of the index.scss inside the agoSASS folder.