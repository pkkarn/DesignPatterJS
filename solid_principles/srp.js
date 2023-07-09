const fs = require('fs');

class Journal {
    constructor() {
        this.entries = [];
        this.count = 0;
    }

    add_entry(entry) {
        this.entries.push(entry);
        this.count++
    }

    // remove entry by its position
    remove_entry(pos) {
        this.entries = this.entries.filter(
            (val, index) => index!==pos - 1
        )
        this.count--;
    }


    /** !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     *
     * You are not supposed to things that is beyond of this class scope e.g.
     * 
     *  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */


    
    // saveFileToText() {
    //     fs.writeFileSync('docs/temp.txt', '')
    //     const entries = this.entries.entries.map((journal, index) => {
    //         console.log(journal)
    //         return `#${index + 1}: ${journal}`
    //     }).join('\n')   
    //     fs.writeFileSync('docs/temp.txt', entries)
    // }
    // > Instead of this keep this in separate function or place
}   

function saveFileToText(journals) {
    fs.writeFileSync('docs/temp.txt', '')
    const entries = journals.entries.map((journal, index) => {
        console.log(journal)
        return `#${index + 1}: ${journal}`
    }).join('\n')   
    fs.writeFileSync('docs/temp.txt', entries)
}

const journal = new Journal();
journal.add_entry('I ate breakfast')
journal.add_entry('I coded langchain')
journal.add_entry('I marinated chicken')


// journal.save_file_to_text()
saveFileToText(journal)

console.log(journal)


