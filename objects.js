var playlist = new Object();

playlist["Slowdive"] = "Alison";
playlist["My Bloody Valentine"] = "Sometimes";

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

updatePlaylist(playlist, "Phil Ochs", "Here's to Mississippi");