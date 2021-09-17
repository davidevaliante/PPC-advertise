import React, { FunctionComponent, Fragment, useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import AquaClient from './../graphql/aquaClient'
import Image from 'next/image'
import { bigScreens, laptop } from '../styles/emotion'

interface IHome {
    bonuses: Bonus[]
}

const Home: FunctionComponent<IHome> = ({ bonuses }) => {
    const [bonusList, setBonusList] = useState(bonuses)
    return (
        <Container>
            <header>
                <Image width={56} height={56} src='/svg/slot.svg' />
                <h1>Migliori Casinò Online</h1>
            </header>

            <section className='top-article'>
                <h2>L'elenco dei Casinò Online più Sicuri in Italia del 2021</h2>
                <div className='divider' />
                <p>
                    In un mercato maturo come quello dei casinò online italiani, non è facile orientarsi e capire quale
                    sia veramente la scelta giusta. Per semplificare la fruibilità, ed aiutarvi a compararli, abbiamo
                    stilato quindi questa classifica dei migliori casino.
                </p>

                <div>
                    <div className='list'>
                        <img width={36} height={36} src='/svg/checked.svg' />
                        <p>Ampia selezione di giochi per tutte le esigenze</p>
                    </div>

                    <div className='list'>
                        <img width={36} height={36} src='/svg/checked.svg' />
                        <p>Servizio clienti gratuito in lingua italiana</p>
                    </div>

                    <div className='list'>
                        <img width={36} height={36} src='/svg/checked.svg' />
                        <p>Offerte bonus a condizioni eque</p>
                    </div>
                </div>
            </section>

            <section className='bonus-list'>
                {bonusList.map((bonus, index) => (
                    <BonusCard key={`card-${index}`} bonus={bonus} index={index} />
                ))}
            </section>

            <StepsSection>
                <div className='step'>
                    <div className='hexagon-container' style={{ backgroundImage: 'url(/svg/hexagon.svg)' }}>
                        <p>1</p>
                    </div>
                    <h4>Click</h4>
                </div>

                <div className='step-arrow' />

                <div className='step'>
                    <div className='hexagon-container' style={{ backgroundImage: 'url(/svg/hexagon.svg)' }}>
                        <p>2</p>
                    </div>
                    <h4>Iscriviti</h4>
                </div>

                <div className='step-arrow' />

                <div className='step'>
                    <div className='hexagon-container' style={{ backgroundImage: 'url(/svg/hexagon.svg)' }}>
                        <p>3</p>
                    </div>
                    <h4>Deposita</h4>
                </div>

                <div className='step-arrow' />

                <div className='step'>
                    <div className='hexagon-container' style={{ backgroundImage: 'url(/svg/hexagon.svg)' }}>
                        <p>4</p>
                    </div>
                    <h4>Ottieni il bonus</h4>
                </div>

                <div className='step-arrow' />

                <div className='step'>
                    <div className='hexagon-container' style={{ backgroundImage: 'url(/svg/hexagon.svg)' }}>
                        <p>5</p>
                    </div>
                    <h4>Gioca</h4>
                </div>
            </StepsSection>
        </Container>
    )
}

export const BonusCard: FunctionComponent<{ bonus: Bonus; index: number }> = ({ bonus, index }) => {
    const handleClick = () => window.open(`/visita?site=${bonus.name}`)

    const acceptedPaymentToAsset = (ap: string) => {
        switch (ap) {
            case 'bank':
                return (
                    <img
                        className='payment-logo'
                        key={`${ap}-${index}`}
                        width={55}
                        height={35}
                        src={`/svg/${ap}.svg`}
                    />
                )
            case 'postepay':
                return (
                    <img
                        className='payment-logo'
                        key={`${ap}-${index}`}
                        width={35}
                        height={35}
                        src={`/svg/${ap}.svg`}
                    />
                )
            case 'skrill':
                return (
                    <img
                        className='payment-logo'
                        key={`${ap}-${index}`}
                        width={35}
                        height={35}
                        src={`/svg/${ap}.svg`}
                    />
                )

            case 'mastercard':
                return (
                    <img
                        className='payment-logo'
                        key={`${ap}-${index}`}
                        width={35}
                        height={35}
                        src={`/svg/${ap}.svg`}
                    />
                )

            case 'paypal':
                return (
                    <img
                        className='payment-logo'
                        key={`${ap}-${index}`}
                        width={35}
                        height={35}
                        src={`/svg/${ap}.svg`}
                    />
                )
            default:
                ;<Fragment></Fragment>
        }
    }

    return (
        <BonusCardContainer onClick={handleClick} bgColor={bonus.backgroundColor}>
            <BonusCardFirstSection bgColor={bonus.backgroundColor} borderColor={bonus.borderColor}>
                <div className='counter'>
                    <p>{index + 1}</p>
                </div>

                <img className='circular' width={76} height={76} src={bonus.circular_image.url} />

                <h3>{bonus.name}</h3>
                <h4>{bonus.noDeposit}</h4>
                <a className='visit-btn' href={bonus.link}>
                    GIOCA ORA
                </a>
            </BonusCardFirstSection>
            <BonusCardSecondSection bgColor={bonus.backgroundColor} borderColor={bonus.borderColor}>
                <div className='row first-row'>
                    <div className='row'>
                        <img width={70} height={30} src='/svg/italy.svg' />
                        <p style={{ fontWeight: 300, fontSize: '.8rem' }}>Accettano giocatori italiani</p>
                        <img style={{ marginLeft: '1rem' }} width={50} height={35} src='/svg/adm.png' />
                    </div>
                </div>

                <div className='divider' />

                <ul>
                    {bonus.tips &&
                        bonus.tips
                            .split('@')
                            .filter((it) => it.length != 0)
                            .map((tip, i) => <li key={`tip-${i}`}>{tip}</li>)}
                </ul>

                <div className='payment-group'>
                    <p>Transazioni sicure con</p>
                    <div className='logo-container'>
                        {bonus.acceptedPayments.map((v, i) => acceptedPaymentToAsset(v.methodName))}
                    </div>
                </div>

                <div className='divider' />

                <div className='rating-group'>
                    {[...Array(bonus.rating).keys()].map((i) => (
                        <img key={`${i}-full`} width={35} height={35} src='/svg/star-full.svg' />
                    ))}
                    {[...Array(5 - bonus.rating).keys()].map((i) => (
                        <img key={`${i}-full`} width={30} height={30} src='/svg/star-empty.svg' />
                    ))}
                </div>
            </BonusCardSecondSection>
        </BonusCardContainer>
    )
}

const StepsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    .hexagon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center;
        background-size: cover;
        width: 56px;
        height: 56px;
        background-repeat: no-repeat;
        margin-right: 1rem;

        p {
            display: inline-block;
            text-align: center;
            font-weight: 700;
            font-size: 1.5rem;
            color: white;
        }
    }

    .hexagon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 46px;
        height: 46px;
        transform: translate(-50%, -50%);
    }

    .step-arrow {
        background-position: center;
        background-size: cover;
        width: 18px;
        height: 18px;
        background-image: url('/svg/step-arrow-right.svg');
        transform: rotate(90deg);
        margin: 0.3rem 0rem;
    }

    .step {
        margin: 0.5rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 70%;
        border: ${({ theme }) => `2px solid ${theme.primary}`};
        padding: 0.5rem;
        border-radius: 8px;
    }

    ${laptop} {
        flex-direction: row;
        max-width: 80vw;
        margin: auto;
        margin-bottom: 6rem;
        margin-top: 2rem;
        justify-content: space-around;
        .step-arrow {
            background-position: center;
            background-size: cover;
            width: 18px;
            height: 18px;
            background-image: url('/svg/step-arrow-right.svg');
            transform: rotate(0deg);
            margin: 0.3rem 0rem;
        }

        .step {
            max-width: 250px;
        }
    }
`

const BonusCardContainer = styled.div<{ bgColor: string }>`
    margin: 2rem 1rem;
    cursor: pointer;
    border: 3px solid ${({ bgColor }) => bgColor};
    width: 90vw;

    ${laptop} {
        display: flex;
        align-items: stretch;
    }

    ${bigScreens} {
        width: 60vw;
        display: flex;
        align-items: stretch;
        margin-top: 0.5rem;
    }
`

const BonusCardSecondSection = styled.div<{ bgColor: string; borderColor: string }>`
    cursor: pointer;
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
        align-items: center;
    }

    .first-row {
        justify-content: space-evenly;
        padding: 1rem;
    }

    ul,
    li {
        margin: 0.8rem 0rem;
    }

    .divider {
        height: 1px;
        background: ${({ bgColor }) => bgColor};
    }

    .payment-group {
        .logo-container {
            display: flex;
            padding: 0.5rem 1.2rem;
            margin: 0.3rem 0rem;
        }
        p {
            margin: 0rem 1.2rem;
            font-size: 0.8rem;
        }

        img:first-of-type {
            margin-left: 0rem;
        }
        .payment-logo {
            margin: 0rem 0.5rem;
        }
    }

    .rating-group {
        display: flex;
        padding: 1rem 0rem;
        justify-content: center;
        align-items: center;

        img {
            margin-left: 0.3rem;
        }

        img:first-of-type {
            margin-left: 0;
        }
    }

    ${laptop} {
        flex-basis: 60%;
    }
`

const BonusCardThirdSection = styled(BonusCardSecondSection)`
    ${laptop} {
        height: 100%;
    }
`

const BonusCardFirstSection = styled.div<{ bgColor: string; borderColor: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    position: relative;
    background: ${({ bgColor }) => bgColor};
    padding-bottom: 1rem;

    ${laptop} {
        height: auto;
        flex-grow: 1;
    }

    .counter {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        top: -20px;
        left: 50%;
        font-weight: 700;
        border: ${({ bgColor }) => `4px solid ${bgColor}`};
        border-radius: 50%;
        transform: translateX(-50%);
        background: white;
    }

    .circular {
        border-radius: 50%;
        border: ${({ borderColor }) => `2px solid ${borderColor}`};
    }

    h3 {
        color: white;
        margin: 1rem 0rem;
        font-size: 2rem;
    }

    h4 {
        color: white;
        margin: 0rem 0rem;
    }

    .visit-btn {
        all: unset;
        cursor: pointer;
        color: ${({ bgColor }) => bgColor};
        background: white;
        border-radius: 50px;
        padding: 1rem 2rem;
        margin: 1rem;
        box-shadow: 0 0 2px black;
        letter-spacing: 0.1rem;
    }
`

const Container = styled.div`
    background: white;

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-weight: 700;
        text-align: center;
        padding: 1rem;
        background: ${({ theme }) => theme.primary};
        color: white;
        box-shadow: 0px 0px 5px black;

        h1 {
            font-size: 22px;
        }
    }

    .divider {
        height: 1px;
        background: ${({ theme }) => theme.primary};
    }

    .top-article {
        padding: 0rem 1rem;

        h2 {
            line-height: 26px;
            text-align: center;
        }

        p {
            line-height: 20px;
        }

        .list {
            display: flex;
            align-items: center;
            p {
                display: block;
                margin: 0.7rem;
                margin-left: 1rem;
            }
        }

        ${bigScreens} {
            width: 70vw;
            margin: auto;
        }
    }

    .bonus-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

        ${bigScreens} {
            width: 70vw;
            margin: auto;
            margin-top: 2rem;
        }
    }
`

export const getStaticProps = async () => {
    const aquaClient = new AquaClient()

    const bonusToGet = ['WinCasino', 'StarCasinò', '888 Casino', 'LeoVegas', 'NetBet']

    const queries = bonusToGet.map((n) =>
        aquaClient.query({
            query: BONUS_BY_NAME,
            variables: {
                name: n,
            },
        })
    )

    const unorderedBonusesResponse = await Promise.all(queries)
    const unorderedBonuses = unorderedBonusesResponse.map((r) => r.data.data.bonuses[0] as Bonus)

    const orderedBonuses: Bonus[] = []

    bonusToGet.forEach((n) => {
        const match = unorderedBonuses.find((b) => b.name === n)
        if (match) orderedBonuses.push(match)
    })

    return {
        props: {
            bonuses: orderedBonuses,
        },
    }
}

export interface Bonus {
    name: string
    link: string
    noDeposit: string
    withDeposit: string

    noDepositValue: string

    circular_image: {
        url: string
    }
    borderColor: string
    backgroundColor: string
    tips: string
    acceptedPayments: {
        methodName: string
    }[]
    rating: number
}

const BONUS_BY_NAME = /* GraphQL */ `
    query ($name: String) {
        bonuses(where: { name: $name, country: { code: "it" } }) {
            name
            link

            noDeposit
            withDeposit

            noDepositValue

            circular_image {
                url
            }
            borderColor
            backgroundColor
            tips
            acceptedPayments {
                methodName
            }
            rating
        }
    }
`

export default Home
