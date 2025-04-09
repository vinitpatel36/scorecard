document.addEventListener('DOMContentLoaded', () => {
    // Check for html2canvas
    if (typeof html2canvas === 'undefined') {
        console.warn("html2canvas library not loaded. Download feature will be disabled.");
    }

    // Predefined Team Data
    const PREDEFINED_TEAMS = [
        {
            teamName: "Purshottam Hawks", 
            players: [
              "Sruhad Patel (307) (C)",
              "Meet S Patel (307) (VC)",
              "Maisuria Laksh (612)",
              "Dhiraj Choithani (816)",
              "Nevil (216)",
              "Mahir Motani (304)",
              "Poojan Patel (915)"
            ]
          },
          {
            teamName: "Shurveer Spartans", 
            players: [
              "Pratham Patel (G 6) (C)",
              "Desai Sevant (9000) (VC)",
              "Kunj (106)",
              "Tandel Sarvam (7000)",
              "Anand Patel (304)",
              "Krishna Baigani (401)",
              "Neel Arvadiya (315)"
            ]
          },
          {
            teamName: "Ekaavdhaani Knights", 
            players: [
              "Saumil Bhai (314) (C)",
              "Patel Pavitra (411) (VC)",
              "Patel Het (6000)",
              "Manavsinh Mori (514)",
              "Viral (G 15)",
              "Meet Modi (303)",
              "Het Patel (905)"
            ]
          },
          {
            teamName: "Samarpan Strom", 
            players: [
              "Patel Rudrakumar (718) (C)",
              "Dip Baldha (G 18) (VC)",
              "Siddh Patel (918)",
              "DESAI PRINCE (302)",
              "Tanna Raj (817)",
              "Utsav (703)",
              "Nirdosh Patel (151)"
            ]
          },
          {
            teamName: "Bhulku Flights", 
            players: [
              "Vatsal (117) (C)",
              "MAAN PATEL (G 2) / Meet Gajera (715) (VC)",
              "Krushitsinh Alonja (203)",
              "Kirtan Mistry (605)",
              "Meet Gandhi (609)",
              "Dr Om (3000)",
              "Arpan Patel (209)"
            ]
          },
          {
            teamName: "Akshar Royals", 
            players: [
              "Patel Rushi (718) (C)",
              "Nirman Sutariya (318) (VC)",
              "Khush (607)",
              "Dev Patel (G 4)",
              "Ashish Gajjar (402)",
              "Anand Solanki (7000)",
              "Herit (902)"
            ]
          },
          {
            teamName: "Prapti Pioneers", 
            players: [
              "Dhaval Jariwala (909) (C)",
              "Harsh Tailor (210) (VC)",
              "Aditya Dodiya (710)",
              "Devvrat Padshala (917)",
              "Priyank Shah (G 15)",
              "Shashwat Prajapati (901)",
              "Rushi (716)"
            ]
          },
          {
            teamName: "Nishchay Tigers",
            players: [
              "Sarang Patel (9000) (C)",
              "Het Patel (305) (VC)",
              "Smit Mahida (G 3)",
              "CD Patel (112)",
              "Meet Kaneria (4000)",
              "Ansh Davra (105)",
              "Jay Patel (G 15)"
            ]
          },
          {
            teamName: "Dazzling Das",
            players: [
              "Het Patel (813) (C)",
              "Vinit Patel (815) (VC)",
              "Pavitra Patel (504)",
              "Yagnik Kakadiya (G 15)",
              "Kunj Patel (314)",
              "Harsh Jaggad (509)",
              "RUDRA MANGROLIYA (204)"
            ]
          },
          {
            teamName: "Prabodham Titans",
            players: [
              "Mumukshu Patel (215) (C)",
              "Patel Nisarg (410) (VC)",
              "Tank Mihir (305)",
              "Asalaliya Taksh (309)",
              "Yash Parekh (715)",
              "Bhatt Parv (915)",
              "Prerak Patel (513)"
            ]
          },
          {
            teamName: "Sarvam Spikers",
            players: [
              "Harin Patel (604) (C)",
              "Devam (214) (VC)",
              "Dhairya Jivani (805)",
              "Parth Jagani (G 12)",
              "Dish Alagiya (818)",
              "Kirtan Patel (709)",
              "Pavitra Modi (107)"
            ]
          },
          {
            teamName: "Satsangi Lions",
            players: [
              "Patel Bhavya (505) (C)",
              "Om Sutariya (716) (VC)",
              "Samanvay Solanki (406)",
              "Deeptesh (409)",
              "Divya Patel (512)",
              "OM Joshi (309)",
              "Parshaw (503)"
            ]
          },
          {
            teamName: "Jagrat Lions",
            players: [
              "Harshrajsinh (817) (C)",
              "Dodiya Mahendrasinh (G 11) (VC)",
              "Sanyam Mistry (3000)",
              "Himanshu (G 15)",
              "Gandhi Param (913)",
              "Dhruv Bhimani (105)",
              "Joshi Smit (703)"
            ]
          },
          {
            teamName: "Ekantik Eagles",
            players: [
              "Param Patel (9000) (C)",
              "Vidhang Mundra (813) (VC)",
              "Patel Vraj (313)",
              "Chitrang (902)",
              "Patel Meet (608)",
              "Het Vanani (501)",
              "Anand Gajjar (816)"
            ]
          }
    ];

    // DOM Elements
    const settingsDiv = document.getElementById('settings');
    const scoreboardDiv = document.getElementById('scoreboard');
    const playerStatsDiv = document.getElementById('playerStats');
    const gameOverDiv = document.getElementById('gameOver');
    const totalSetsSelect = document.getElementById('totalSets');
    const pointsPerSetInput = document.getElementById('pointsPerSet');
    const pointsFinalSetInput = document.getElementById('pointsFinalSet');
    const selectTeamA = document.getElementById('selectTeamA');
    const selectTeamB = document.getElementById('selectTeamB');
    const teamANameInput = document.getElementById('teamAName');
    const teamBNameInput = document.getElementById('teamBName');
    const teamAPlayersTextarea = document.getElementById('teamAPlayers');
    const teamBPlayersTextarea = document.getElementById('teamBPlayers');
    const startGameBtn = document.getElementById('startGameBtn');
    const matchTitle = document.getElementById('matchTitle');
    const displayTeamAName = document.getElementById('displayTeamAName');
    const displayTeamBName = document.getElementById('displayTeamBName');
    const currentSetNumSpan = document.getElementById('currentSetNum');
    const maxSetsDisplaySpan = document.getElementById('maxSetsDisplay');
    const targetPointsSpan = document.getElementById('targetPoints');
    const teamAScoreSpan = document.getElementById('teamAScore');
    const teamBScoreSpan = document.getElementById('teamBScore');
    const teamASetsSpan = document.getElementById('teamASets');
    const teamBSetsSpan = document.getElementById('teamBSets');
    const scoreTeamANameH3 = document.getElementById('scoreTeamAName');
    const scoreTeamBNameH3 = document.getElementById('scoreTeamBName');
    const pointButtons = document.querySelectorAll('.point-btn');
    const undoPointBtn = document.getElementById('undoPointBtn');
    const lastPointInfo = document.getElementById('lastPointInfo');
    const statsTeamANameH3 = document.getElementById('statsTeamAName');
    const statsTeamBNameH3 = document.getElementById('statsTeamBName');
    const teamAPlayerListUL = document.getElementById('teamAPlayerList');
    const teamBPlayerListUL = document.getElementById('teamBPlayerList');
    const undoDefenceBtn = document.getElementById('undoDefenceBtn');
    const winnerMessageP = document.getElementById('winnerMessage');
    const finalScoreP = document.getElementById('finalScore');
    const finalSetScoresDiv = document.getElementById('finalSetScores'); // New Div for set scores
    const playerOfTheMatchP = document.getElementById('playerOfTheMatch');
    const finalStatsDiv = document.getElementById('finalPlayerStats');
    const finalStatsTeamANameH4 = document.getElementById('finalStatsTeamAName');
    const finalStatsTeamBNameH4 = document.getElementById('finalStatsTeamBName');
    const finalStatsListAUL = document.getElementById('finalStatsListA');
    const finalStatsListBUL = document.getElementById('finalStatsListB');
    const newGameSettingsBtn = document.getElementById('newGameSettingsBtn');
    const downloadResultsBtn = document.getElementById('downloadResultsBtn');
    const pointScorerModal = document.getElementById('pointScorerModal');
    const modalTeamName = document.getElementById('modalTeamName');
    const modalPlayerListA = document.getElementById('modalPlayerListA');
    const modalPlayerListB = document.getElementById('modalPlayerListB');
    const cancelPointSelectionBtn = document.getElementById('cancelPointSelectionBtn');

    // --- Game State Variables ---
    let gameState = {
        teamAScore: 0, teamBScore: 0, teamASets: 0, teamBSets: 0,
        currentSet: 1, totalSets: 3, pointsToWinSet: 25, pointsToWinFinalSet: 15,
        teamAName: "Team A", teamBName: "Team B",
        playersA: [], playersB: [],
        gameOver: false, matchStarted: false, selectingScorer: false,
        history: [], defenceHistory: [], lastScorer: null,
        setResults: [] // NEW: Array to store {setNumber, scoreA, scoreB}
    };

    // --- Helper Functions ---
    const deepCopy = obj => JSON.parse(JSON.stringify(obj || null));
    const parsePlayerNames = txt => txt.split('\n').map(n => n.trim()).filter(n => n).map(name => ({ name, defences: 0, points: 0 }));

    // --- Team Preset Functions ---
    function populateTeamSelectors() { /* ... same as previous ... */
        PREDEFINED_TEAMS.forEach((team, index) => {
            const optionA = document.createElement('option'); optionA.value = index; optionA.textContent = team.teamName; selectTeamA.appendChild(optionA);
            const optionB = document.createElement('option'); optionB.value = index; optionB.textContent = team.teamName; selectTeamB.appendChild(optionB);
        });
    }
    function handleTeamSelectionChange(event) { /* ... same as previous ... */
        const selectElement = event.target; const selectedIndex = selectElement.value;
        const isTeamA = selectElement.id === 'selectTeamA';
        const nameInput = isTeamA ? teamANameInput : teamBNameInput;
        const playersTextarea = isTeamA ? teamAPlayersTextarea : teamBPlayersTextarea;
        if (selectedIndex === 'manual') { return; } // Do nothing if manual selected
        const teamData = PREDEFINED_TEAMS[parseInt(selectedIndex, 10)];
        if (teamData) { nameInput.value = teamData.teamName; playersTextarea.value = teamData.players.join('\n'); }
    }

    // --- Core Game Logic Functions ---

    function resetGameToSettings() {
        Object.assign(gameState, {
            teamAScore: 0, teamBScore: 0, teamASets: 0, teamBSets: 0, currentSet: 1,
            gameOver: false, matchStarted: false, selectingScorer: false,
            history: [], defenceHistory: [], lastScorer: null, playersA: [], playersB: [],
            setResults: [], // Reset set results array
            totalSets: parseInt(totalSetsSelect.value, 10) || 3, pointsToWinSet: parseInt(pointsPerSetInput.value, 10) || 25,
            pointsToWinFinalSet: parseInt(pointsFinalSetInput.value, 10) || 15,
            teamAName: teamANameInput.value || "Team A", teamBName: teamBNameInput.value || "Team B",
        });
        // Clear UI elements
        [teamAPlayerListUL, teamBPlayerListUL, modalPlayerListA, modalPlayerListB, finalStatsListAUL, finalStatsListBUL, finalSetScoresDiv].forEach(el => { if(el) el.innerHTML = ''; }); // Also clear set scores div
        if(lastPointInfo) lastPointInfo.textContent = 'Last point: N/A';
        selectTeamA.value = 'manual'; selectTeamB.value = 'manual';
        if(settingsDiv) settingsDiv.classList.remove('hidden');
        [scoreboardDiv, playerStatsDiv, gameOverDiv, pointScorerModal].forEach(el => { if(el) el.classList.add('hidden'); });
        updateDisplay();
    }

    function updateDisplay() { /* ... same as previous (button states, text, visibility) ... */
        if (!document.body.contains(settingsDiv)) return; // Safety check

        // Update text content
        displayTeamAName.textContent = gameState.teamAName; displayTeamBName.textContent = gameState.teamBName;
        scoreTeamANameH3.textContent = gameState.teamAName; scoreTeamBNameH3.textContent = gameState.teamBName;
        matchTitle.textContent = `Match: ${gameState.teamAName} vs ${gameState.teamBName}`;
        teamAScoreSpan.textContent = gameState.teamAScore; teamBScoreSpan.textContent = gameState.teamBScore;
        teamASetsSpan.textContent = gameState.teamASets; teamBSetsSpan.textContent = gameState.teamBSets;
        currentSetNumSpan.textContent = gameState.currentSet; maxSetsDisplaySpan.textContent = gameState.totalSets;
        const target = (gameState.currentSet === gameState.totalSets && gameState.totalSets > 1) ? gameState.pointsToWinFinalSet : gameState.pointsToWinSet;
        targetPointsSpan.textContent = target;
        lastPointInfo.textContent = gameState.lastScorer ? `Last point: ${gameState.lastScorer.playerName} (${gameState.lastScorer.team === 'A' ? gameState.teamAName : gameState.teamBName})` : 'Last point: N/A';

        // Update live player stats lists if match is active
        if (gameState.matchStarted && !gameState.gameOver && !gameState.selectingScorer) {
            renderPlayerList(gameState.playersA, teamAPlayerListUL, 'A', true);
            renderPlayerList(gameState.playersB, teamBPlayerListUL, 'B', true);
            statsTeamANameH3.textContent = `${gameState.teamAName} Players`;
            statsTeamBNameH3.textContent = `${gameState.teamBName} Players`;
        }

        // Control button states
        const buttonsLocked = gameState.gameOver || gameState.selectingScorer || !gameState.matchStarted;
        pointButtons.forEach(btn => btn.disabled = buttonsLocked);
        document.querySelectorAll('.defence-btn').forEach(btn => btn.disabled = gameState.gameOver || gameState.selectingScorer);
        undoPointBtn.disabled = gameState.history.length === 0 || buttonsLocked;
        undoDefenceBtn.disabled = gameState.defenceHistory.length === 0 || buttonsLocked;
        downloadResultsBtn.disabled = !gameState.gameOver || typeof html2canvas === 'undefined';

        // Control section visibility
        settingsDiv.classList.toggle('hidden', gameState.matchStarted || gameState.gameOver);
        const showGameSections = gameState.matchStarted && !gameState.gameOver && !gameState.selectingScorer;
        scoreboardDiv.classList.toggle('hidden', !showGameSections);
        playerStatsDiv.classList.toggle('hidden', !showGameSections);
        gameOverDiv.classList.toggle('hidden', !gameState.gameOver);
        pointScorerModal.classList.toggle('hidden', !gameState.selectingScorer);
    }

    function renderPlayerList(players, ulElement, team, includeButton) { /* ... same as previous ... */
        if(!ulElement) return; ulElement.innerHTML = ''; if (!players) return;
        players.forEach((player, index) => {
            const li = document.createElement('li'); const nameSpan = document.createElement('span');
            nameSpan.className = includeButton ? 'player-name' : 'player-stat-name'; nameSpan.textContent = player.name; li.appendChild(nameSpan);
            const statsContainer = document.createElement('div'); statsContainer.className = includeButton ? 'live-stats-line' : 'player-stat-values';
            const pointsDiv = document.createElement(includeButton ? 'div' : 'span'); pointsDiv.className = 'player-points'; pointsDiv.innerHTML = `Pts: <span>${player.points}</span>`; statsContainer.appendChild(pointsDiv);
            const defenceDiv = document.createElement(includeButton ? 'div' : 'span'); defenceDiv.className = 'player-defences'; defenceDiv.innerHTML = `Def: <span>${player.defences}</span>`; statsContainer.appendChild(defenceDiv);
            li.appendChild(statsContainer);
            if (includeButton) { const defenceBtn = document.createElement('button'); defenceBtn.className = 'defence-btn'; defenceBtn.textContent = '+ Def'; defenceBtn.dataset.team = team; defenceBtn.dataset.index = index; defenceBtn.disabled = gameState.gameOver || gameState.selectingScorer; defenceBtn.addEventListener('click', handleDefenceClick); li.appendChild(defenceBtn); }
            ulElement.appendChild(li); });
    }

    function handleStartGame() { /* ... same as previous ... */
        const settings = { totalSets: parseInt(totalSetsSelect.value, 10), pointsPerSet: parseInt(pointsPerSetInput.value, 10), pointsFinalSet: parseInt(pointsFinalSetInput.value, 10) };
        const teamAName = teamANameInput.value.trim() || "Team A"; const teamBName = teamBNameInput.value.trim() || "Team B";
        const playersA = parsePlayerNames(teamAPlayersTextarea.value); const playersB = parsePlayerNames(teamBPlayersTextarea.value);
        if (isNaN(settings.totalSets) || settings.totalSets <= 0 || isNaN(settings.pointsPerSet) || settings.pointsPerSet <= 0 || isNaN(settings.pointsFinalSet) || settings.pointsFinalSet <= 0) { alert("Invalid sets/points."); return; }
        if (playersA.length === 0 || playersB.length === 0) { alert("Add players for both teams."); return; }
        if (settings.totalSets > 1 && settings.pointsPerSet === settings.pointsFinalSet && !confirm(`Warning: Regular & final set need ${settings.pointsPerSet} pts. OK?`)) { return; }
        resetGameToSettings(); Object.assign(gameState, settings); gameState.teamAName = teamAName; gameState.teamBName = teamBName; gameState.playersA = playersA; gameState.playersB = playersB;
        gameState.matchStarted = true; gameState.gameOver = false; gameState.selectingScorer = false; updateDisplay();
    }

    function saveCurrentStateToHistory() { /* ... same as previous ... */
        const stateToSave = deepCopy({ teamAScore: gameState.teamAScore, teamBScore: gameState.teamBScore, teamASets: gameState.teamASets, teamBSets: gameState.teamBSets, currentSet: gameState.currentSet, playersA: gameState.playersA, playersB: gameState.playersB, lastScorer: gameState.lastScorer });
        if (stateToSave) gameState.history.push(stateToSave); else console.error("Failed to save state.");
    }

    function handleUndoPoint() { /* ... same as previous ... */
        if (gameState.history.length === 0 || gameState.gameOver || gameState.selectingScorer) return;
        const previousState = gameState.history.pop(); if (!previousState) return;
        Object.assign(gameState, { teamAScore: previousState.teamAScore, teamBScore: previousState.teamBScore, teamASets: previousState.teamASets, teamBSets: previousState.teamBSets, currentSet: previousState.currentSet, playersA: deepCopy(previousState.playersA) || [], playersB: deepCopy(previousState.playersB) || [], lastScorer: deepCopy(previousState.lastScorer), gameOver: false });
        updateDisplay();
    }

    function showPointScorerModal(scoringTeam) { /* ... same as previous ... */
        if (gameState.gameOver || gameState.selectingScorer) return;
        gameState.selectingScorer = true; modalTeamName.textContent = scoringTeam === 'A' ? gameState.teamAName : gameState.teamBName;
        const players = scoringTeam === 'A' ? gameState.playersA : gameState.playersB;
        const listElement = scoringTeam === 'A' ? modalPlayerListA : modalPlayerListB;
        const otherListElement = scoringTeam === 'A' ? modalPlayerListB : modalPlayerListA;
        listElement.innerHTML = ''; if (players) { players.forEach((player, index) => { const li = document.createElement('li'); li.textContent = player.name; li.addEventListener('click', () => handlePlayerSelectedForPoint(scoringTeam, index)); listElement.appendChild(li); }); }
        listElement.classList.remove('hidden'); otherListElement.classList.add('hidden'); updateDisplay();
    }

    function handlePlayerSelectedForPoint(team, playerIndex) { /* ... same as previous ... */
        if (!gameState.selectingScorer || gameState.gameOver) return;
        saveCurrentStateToHistory();
        const players = team === 'A' ? gameState.playersA : gameState.playersB;
        if (!players || !players[playerIndex]) { handleCancelPointSelection(); return; }
        const scorerName = players[playerIndex].name;
        if (team === 'A') { gameState.teamAScore++; players[playerIndex].points++; } else { gameState.teamBScore++; players[playerIndex].points++; }
        gameState.lastScorer = { team, playerIndex, playerName: scorerName }; gameState.selectingScorer = false;
        checkSetWin(); updateDisplay();
    }

    function handleCancelPointSelection() { /* ... same as previous ... */
        if (!gameState.selectingScorer) return; gameState.selectingScorer = false; updateDisplay();
    }

    // --- Modified checkSetWin ---
    function checkSetWin() {
        const pointsNeeded = (gameState.currentSet === gameState.totalSets && gameState.totalSets > 1) ? gameState.pointsToWinFinalSet : gameState.pointsToWinSet;
        const scoreA = gameState.teamAScore;
        const scoreB = gameState.teamBScore;
        let setWon = false;

        if (scoreA >= pointsNeeded && scoreA >= scoreB + 2) {
            gameState.teamASets++;
            setWon = true;
        } else if (scoreB >= pointsNeeded && scoreB >= scoreA + 2) {
            gameState.teamBSets++;
            setWon = true;
        }

        if (setWon) {
            // --- NEW: Record the final score for the set that just ended ---
            gameState.setResults.push({
                setNumber: gameState.currentSet,
                scoreA: scoreA, // Score before reset
                scoreB: scoreB  // Score before reset
            });
            // --- End NEW ---

            if (!checkMatchWin()) { // If match not over, proceed to next set
                gameState.currentSet++;
                gameState.teamAScore = 0;
                gameState.teamBScore = 0;
                gameState.lastScorer = null;
            }
        }
    }

    function checkMatchWin() { /* ... same as previous ... */
        const setsNeededToWin = Math.ceil(gameState.totalSets / 2);
        if (gameState.teamASets >= setsNeededToWin || gameState.teamBSets >= setsNeededToWin) {
            // --- Potential Edge Case: If the *very last* point wins the match, the last set's score might not have been recorded yet in checkSetWin
            // --- Let's record it here just in case ---
            const lastSetResult = gameState.setResults.find(r => r.setNumber === gameState.currentSet);
            if (!lastSetResult) {
                 gameState.setResults.push({
                    setNumber: gameState.currentSet,
                    scoreA: gameState.teamAScore, // Current score is final score
                    scoreB: gameState.teamBScore
                });
            }
            // --- End Edge Case Handling ---
            gameState.gameOver = true;
            displayGameOver(); // Trigger game over display
            return true;
        }
        return false;
    }

     function handleDefenceClick(event) { /* ... same as previous ... */
         if (gameState.gameOver || gameState.selectingScorer) return;
        const { team, index } = event.target.dataset; const playerIndex = parseInt(index, 10);
        const playerList = team === 'A' ? gameState.playersA : gameState.playersB;
        if (playerList && playerList[playerIndex] !== undefined) { gameState.defenceHistory.push({ team, playerIndex }); playerList[playerIndex].defences++; }
        updateDisplay();
    }

    function handleUndoDefence() { /* ... same as previous ... */
         if (gameState.defenceHistory.length === 0 || gameState.gameOver || gameState.selectingScorer) return;
        const lastAction = gameState.defenceHistory.pop(); if (!lastAction) return;
        const { team, playerIndex } = lastAction; const playerList = team === 'A' ? gameState.playersA : gameState.playersB;
        if (playerList && playerList[playerIndex] && playerList[playerIndex].defences > 0) { playerList[playerIndex].defences--; }
        updateDisplay();
    }

    function determinePlayerOfTheMatch() { /* ... same as previous ... */
        let potm = null; let maxCombinedScore = -1;
        const allPlayers = [ ...(gameState.playersA || []).map(p => ({ ...p, teamName: gameState.teamAName })), ...(gameState.playersB || []).map(p => ({ ...p, teamName: gameState.teamBName })) ];
        if (allPlayers.length === 0) return "N/A";
        allPlayers.forEach(player => { const combinedScore = player.points + player.defences; if (combinedScore > maxCombinedScore) { maxCombinedScore = combinedScore; potm = player; } });
        if (maxCombinedScore <= 0 || !potm) { return "N/A (No points or defences recorded)"; }
        return `${potm.name} (${potm.teamName}) with ${potm.points} Points & ${potm.defences} Defences (Total: ${maxCombinedScore})`;
    }

    // --- Modified displayGameOver ---
    function displayGameOver() {
        const winner = gameState.teamASets > gameState.teamBSets ? gameState.teamAName : gameState.teamBName;
        winnerMessageP.textContent = `${winner} wins the match!`;
        finalScoreP.textContent = `Final Score: ${gameState.teamASets} - ${gameState.teamBSets}`; // Overall sets
        playerOfTheMatchP.textContent = `Player of the Match: ${determinePlayerOfTheMatch()}`;

        // --- NEW: Populate Set Scores ---
        finalSetScoresDiv.innerHTML = ''; // Clear previous scores
        if (gameState.setResults.length > 0) {
            gameState.setResults.forEach(result => {
                const margin = Math.abs(result.scoreA - result.scoreB);
                const setP = document.createElement('p');
                // Display Winner Bold? Optional styling choice
                const scoreText = result.scoreA > result.scoreB
                                  ? `<strong>${result.scoreA}</strong> - ${result.scoreB}`
                                  : `${result.scoreA} - <strong>${result.scoreB}</strong>`;
                setP.innerHTML = `Set ${result.setNumber}: ${scoreText} <span class="margin">(Margin: ${margin})</span>`;
                finalSetScoresDiv.appendChild(setP);
            });
        } else {
            finalSetScoresDiv.innerHTML = '<p>No completed sets recorded.</p>';
        }
        // --- End NEW ---

        // Populate Final Player Stats
        finalStatsTeamANameH4.textContent = gameState.teamAName;
        finalStatsTeamBNameH4.textContent = gameState.teamBName;
        renderPlayerList(gameState.playersA, finalStatsListAUL, 'A', false); // No buttons
        renderPlayerList(gameState.playersB, finalStatsListBUL, 'B', false);

        // Final state update
        gameState.gameOver = true;
        gameState.matchStarted = false;
        gameState.selectingScorer = false;
        updateDisplay(); // Show game over section
    }

    function downloadResultsAsImage() { /* ... same as previous ... */
        if (typeof html2canvas === 'undefined') { alert("Error: html2canvas library not available."); return; }
        if (!gameState.gameOver) return;
        const elementToCapture = gameOverDiv;
        const options = { backgroundColor: '#ffffff', useCORS: true, logging: false, scale: window.devicePixelRatio || 1, scrollX: 0, scrollY: -window.scrollY, windowWidth: elementToCapture.scrollWidth, windowHeight: elementToCapture.scrollHeight };
        downloadResultsBtn.disabled = true; newGameSettingsBtn.disabled = true;
        html2canvas(elementToCapture, options).then(canvas => {
            const imageDataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a'); link.href = imageDataUrl;
            const filename = `Volleyball_Results_${gameState.teamAName}_vs_${gameState.teamBName}.png`.replace(/[^a-z0-9_.-]/gi, '_');
            link.download = filename; document.body.appendChild(link); link.click(); document.body.removeChild(link);
        }).catch(error => {
            console.error('Error capturing element with html2canvas:', error); alert(`Failed to generate image: ${error}`);
        }).finally(() => {
            downloadResultsBtn.disabled = !gameState.gameOver || typeof html2canvas === 'undefined'; // Re-set state
            newGameSettingsBtn.disabled = false;
        });
    }

    // --- Event Listeners Setup ---
    startGameBtn.addEventListener('click', handleStartGame);
    newGameSettingsBtn.addEventListener('click', resetGameToSettings);
    undoPointBtn.addEventListener('click', handleUndoPoint);
    undoDefenceBtn.addEventListener('click', handleUndoDefence);
    pointButtons.forEach(button => button.addEventListener('click', (e) => showPointScorerModal(e.target.dataset.team)));
    cancelPointSelectionBtn.addEventListener('click', handleCancelPointSelection);
    pointScorerModal.addEventListener('click', (e) => { if (e.target === pointScorerModal) handleCancelPointSelection(); });
    downloadResultsBtn.addEventListener('click', downloadResultsAsImage);
    selectTeamA.addEventListener('change', handleTeamSelectionChange);
    selectTeamB.addEventListener('change', handleTeamSelectionChange);

    // --- Initial Load ---
    populateTeamSelectors(); // Populate dropdowns
    resetGameToSettings(); // Initialize

});
