function printScores() {
    var scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    scores.sort(function(a, b) {
        return b.score-a.score;
    });

    for (var i = 0; i < scores.length; i += 1) {
        var liTag = document.createElement('li');
        liTag.textContent = scores[i].initials + ' - ' + scores[i].score;

        var olEl = document.getElementById('Scores');
        olEl.appendChild(liTag);
      }
    }
    
    function clearScores() {
      window.localStorage.removeItem('scores');
      window.location.reload();
    }
    
    document.getElementById('clear').onclick = clearScores;
    
    
    printScores();
