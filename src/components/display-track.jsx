
function DisplayTrack(props) {
	return (
		<div>
			<audio controls src={props.track.src} />
		</div>

	);
}



export default DisplayTrack;
