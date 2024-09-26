export default function MouseEvent() {
    return(
        <h1
        onClick={e=> alert('onClick')}
        onMouseEnter={e=> alert('OnMouseEnter')}
        onMouseOver={e=> alert('onMouseOver')}
        onMouseDown={e=> alert('onMouseDown')}
        onMouseUp={e=> alert('onMouseUp')}
        onMouseLeave={e=> alert('onMouseLeave')}
        > Click me </h1>
    );
}