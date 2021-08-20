import {Link} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BuildIcon from '@material-ui/icons/Build';

function AdminLinks(){

    const isLocalHost = window.location.hostname === "localhost";

    if (isLocalHost){
        return (
            <div>
                <Link style={{textDecoration : 'none', margin: '5px'}} to="/admin" >
                    <IconButton aria-label="home">
                        <SettingsIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </Link>

                <Link style={{textDecoration : 'none', margin: '5px'}} to="/create" >
                    <IconButton aria-label="home">
                        <AddCircleIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </Link>

                <Link style={{textDecoration : 'none', margin: '5px'}} to="/createrecipe" >
                    <IconButton aria-label="home">
                        <BuildIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </Link>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default AdminLinks;