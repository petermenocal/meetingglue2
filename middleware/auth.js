export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You must login.',
      statusCode: 403
    })
  }
}
