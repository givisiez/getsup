import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/givisiez.png" alt="Leandro Givisiez" />
            <div>
                <b>Leandro Givisiez</b>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}