class Chore {
    constructor() {
        this.chores = [];
    }

    createChore(choreTitle, choreDescription, choreDate, chorePriority) {
        const chore = {
            id: this.chores.length > 0 ? this.chores.length + 1 : 1,
            choreTitle: choreTitle,
            choreDescription: choreDescription,
            choreDate: choreDate,
            chorePriority: chorePriority,
        };

        this.chores.push(chore);

        console.log(this.chores);
    }

    // filter chores ?

    // update chore

    // delete chore
}

export default Chore;
