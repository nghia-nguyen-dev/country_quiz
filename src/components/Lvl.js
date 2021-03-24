const Lvl = ({handleSelection, lvl}) => {
	return (
		<li onClick={handleSelection} className="Levels__option">
			{lvl}
		</li>
	);
};

export default Lvl;