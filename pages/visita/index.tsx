import React, { FunctionComponent, Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

interface Iindex {}

const index: FunctionComponent<Iindex> = ({}) => {
    const router = useRouter()

    const { site } = router.query
    let redirect

    if (site === 'WinCasino') redirect = 'https://www.wincasinopromo.it/?mp=20f65900-3c5c-4ac2-a5ee-17aac6ccf2be'
    if (site === 'StarCasinò') redirect = 'http://record.affiliatelounge.com/_SEA3QA6bJTMP_fzV1idzxmNd7ZgqdRLk/139/'
    if (site === '888 Casino') redirect = 'https://ic.aff-handler.com/c/43431?sr=1863601'
    if (site === 'LeoVegas') redirect = 'https://ads.leovegas.com/redirect.aspx?pid=3709324&bid=14965'
    if (site === 'NetBet') redirect = 'https://banners.livepartners.com/click.php?z=146655'

    return (
        <div>
            <Head>{redirect && <meta httpEquiv='refresh' content={`0.1;url=${redirect}`}></meta>}</Head>
        </div>
    )
}

export default index
