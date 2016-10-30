// Create a trimmed version of the first line
// Remove non-filename safe characters

var firstLine = draft.content.split('\n')[0];
var re = new RegExp("^[#%&><{}\\\*\?\/\$\!\'\"\:@\ ]*(.+)$","i");
var match = re.exec(firstLine);
var fileName = match[1].replace(/ +/gi, "-")
                    .toLowerCase()
                    .replace(/[#%&><{}\\\*\?\/\$\!\'\"\:@]/gi,"").trim();

draft.defineTag("filename",fileName);

var body = draft.content.substring(draft.content.indexOf("\n") + 1);

draft.defineTag("body",body);
