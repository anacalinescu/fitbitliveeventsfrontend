import React from 'react';
import { useEffect } from 'react';
import { AccountInfo } from './AccountInfo'
import { fetchParticipantSummary } from '../actions/postsActions'
import { connect } from 'react-redux'

const DisplayAccountInfo = ({ dispatch, loading, info, hasErrors }) => {
    const username = window.localStorage.getItem('user')

    useEffect(() => {    
        //console.log(username)
        if (username != null) {
            dispatch(fetchParticipantSummary(username))
        }
    }, [dispatch])

    const displayInfo = () => {  
        if (info == null) {
            return <AccountInfo info={{'attended': -1, 'organized': -1, 'ranked': -1}} />
        } else {
            console.log(info)
            return <AccountInfo info={{'attended': info['attended'],
                                       'organized': info['organized'],
                                       'ranked': info['ranked']}} />
        }
    }

    return (
        <div>
            {displayInfo()}
        </div>
    );
}

const mapStateToProps = state => ({  
    loading: state.info.loading,  
    info: state.info.info,  
    hasErrors: state.info.hasErrors,
})

export default connect(mapStateToProps)(DisplayAccountInfo)