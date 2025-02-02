"use strict";

import Projects from "./Projects";

class Chore extends Projects {
    constructor() {
        super();
        // TEMPORARY
        // will later get the choresList from Projects class to add chores to it
        this.choresList = [];
    }

    createChore(
        projectId,
        choreTitle,
        choreDescription,
        choreDate,
        chorePriority
    ) {
        const chore = {
            id: this.choresList.length > 0 ? this.choresList.length + 1 : 1,
            // TEMPORARY
            projectId: 1,
            choreTitle: choreTitle,
            choreDescription: choreDescription,
            choreDate: choreDate,
            chorePriority: chorePriority,
        };

        this.addChoreToChoreList(chore);

        console.log(this.choresList);
    }

    addChoreToChoreList(chore) {
        this.choresList.push(chore);
    }

    // filter chores ?

    // update chore

    // delete chore
}

export default Chore;
