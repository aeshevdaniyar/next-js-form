



const authInit = async (code: string) => {
  const res = await fetch(`https://aeshevdaniya-nextjsform-1yjcrqzmq19.ws-us108.gitpod.io/api/auth/callback?code=${code}`, { cache: 'no-store' })
  return res

}

export default async function Page({ searchParams }: {
  searchParams: {
    code: string
  }
}) {
  const res = await authInit(searchParams.code)

  return (
    <div>{JSON.stringify(res)}</div>
  );
}
