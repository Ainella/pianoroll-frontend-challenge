export default class Selection {
    constructor(pianoRoll, start) {
        this.pianoRoll = pianoRoll;

        const pianoRollElement = pianoRoll.svgElement;
        //const pianoRollCard = pianoRollElement.parentElement;
        //let selectionDiv = document.createElement("div");
        //selectionDiv.classList.add("selection");
        //selectionDiv.style.top = (0 - pianoRollElement.getBoundingClientRect().height) + "px";


        //selectionDiv.style.left = start + "px";
        //pianoRollCard.appendChild(selectionDiv);
        pianoRoll.selection(0,0);
        const mousemove = (e) => {

            const left = Math.min(start, e.offsetX);
            const right = Math.max(start, e.offsetX);
            pianoRoll.selection(left,right);
            //const width = Math.abs(e.offsetX - start);
            //selectionDiv.style.left =  (start  + 20.0 - pianoRollElement.getBoundingClientRect().width) + "px";
            //selectionDiv.style.width = width + "px";


        };

        pianoRollElement.addEventListener("mousemove", mousemove);

        const mouseup = (e) => {
            //pianoRollCard.removeChild(selectionDiv);
            pianoRollElement.removeEventListener("mousemove", mousemove);
            pianoRollElement.removeEventListener("mouseup", mouseup);
            const selectedNotes = pianoRoll.getSelectedNotes();
            console.log("Selected Notes:", selectedNotes);
            console.log("Number of Notes Selected:", selectedNotes.length);

        };

        pianoRollElement.addEventListener("mouseup", mouseup);


    }
}