import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Olá, me chamo Marllon e sou desenvolvedor front-end React e estou estudando NextJS!</p>
                <p>
                    Esse é um website de exemplo. Você pode construir um site como este no{' '}
                    <a href="https://nextjs.org/learn">tutorial Next.js</a>.
                </p>
            </section>
        </Layout>
    )
}
