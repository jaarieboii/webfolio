export default async (navigationUID: string, layout: string) => {

    const { client } = usePrismic()
    const { data, pending, error, refresh } = await useAsyncData(`${navigationUID}`, () => client.getByUID('navigation', navigationUID))
  
    return {
      data,
      pending,
      error,
      refresh
    }
  }
  