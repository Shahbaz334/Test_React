import '../screen/home/styles.css'
function ImageScreen({ data, toDelete, keyIndex, toEdit }) {
    return (
        <div key={keyIndex} style={{ width: '25%', display: 'inline-block', position: 'relative' }}>
            <div className="img">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p class="dropdown-item" onClick={() => { toEdit(data.id, data.title, data.body) }}>Edit</p>
                        <p class="dropdown-item" onClick={() => { toDelete(data.id) }}>Delete</p>
                    </div>
                </div>
                <p style={{marginTop:35,color:'white',fontSize:10,marginInline:30}}>{`Title : ${data.title}`}</p>
                <div class="foot_banner">
                    <div class="left">
                        {data.userId}
                    </div>
                    <div class="right">
                        {data.id}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ImageScreen;