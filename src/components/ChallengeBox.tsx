import styles from '../styles/components/ChallengeBox.module.css';

export function Challengebox() {
    const hasAtiveChallenge = true;
    return (
        <div className={ styles.challengeBoxContainer }>
            { hasAtiveChallenge ? (
                <div className={ styles.challengeActive }>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <b>Novo desafio</b>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button 
                            type="button" 
                            className={ styles.challengeFailedButton }
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={ styles.challengeSucceededButton }
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={ styles.challengeNotActive }>
                    <b>Finalize um ciclo para receber um desafio</b>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}
