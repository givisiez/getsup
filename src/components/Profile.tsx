import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'
import { CompletedChallenges } from './CompletedChallenges';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/givisiez.png" alt="Leandro Givisiez" />
            <div>
                <b>Leandro Givisiez</b>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}