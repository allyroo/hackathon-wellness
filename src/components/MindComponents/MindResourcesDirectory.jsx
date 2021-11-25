import './MindResourcesDirectory.css';

const MindResourcesDirectory = () => {
    const directory_data = [
        { id: 'list-01', text: 'Mindful Therapy Group - Northgate', website: 'https://www.mindfultherapygroup.com/' },
        { id: 'list-02', text: 'Seattle Anxiety Specialists, PLLC - Psychiatry & Psychotherapy', website: 'seattleanxiety.com' },
        { id: 'list-03', text: 'MEND Seattle', website: "https://mendseattle.com/" },
        { id: 'list-04', text: 'Seattle Couples Counseling™ & Group Therapy Seattle™', website: 'http://seattlecouplescounseling.com/seattlecouplescounseling.com/Welcome.html' },
        { id: 'list-05', text: "Women's Therapy Groups of Seattle", website: 'http://www.womenstherapygroupsseattle.com/' },
        { id: 'list-01', text: 'Mindful Therapy Group - Northgate', website: 'https://www.mindfultherapygroup.com/' },
        { id: 'list-02', text: 'Seattle Anxiety Specialists, PLLC - Psychiatry & Psychotherapy', website: 'seattleanxiety.com' },
        { id: 'list-03', text: 'MEND Seattle', website: "https://mendseattle.com/" },
        { id: 'list-04', text: 'Seattle Couples Counseling™ & Group Therapy Seattle™', website: 'http://seattlecouplescounseling.com/seattlecouplescounseling.com/Welcome.html' },
        { id: 'list-05', text: "Women's Therapy Groups of Seattle", website: 'http://www.womenstherapygroupsseattle.com/' },
    ]

    return (
        <div className="directory-list">
            {directory_data.map(place =>
                <a href={`${place.website}`} target="_blank" rel="noopener noreferrer">
                    <h6>{place.text}</h6>
                </a>
            )}
        </div>
    )
}

export default MindResourcesDirectory
