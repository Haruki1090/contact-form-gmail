import Image from "next/image";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>お問い合わせフォーム</title>
        <meta name="description" content="お問い合わせフォーム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container ml-10 mt-8">
        <h1 className="mb-3">お問い合わせフォーム</h1>
        <form className="container">
          <div className="mb-3">
            <label htmlFor="name" className="form-label block">お名前</label>
            <input type="text" className="form-control" id="name" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label block">メールアドレス</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label block">お問い合わせ内容</label>
            <textarea className="form-control" id="message" rows={3}></textarea>
          </div>
          <button type="submit" className="btn btn-danger block bg-red-600 px-4 py-2 rounded-md">送信</button>
        </form>
      </div>
    </>
  );
}
