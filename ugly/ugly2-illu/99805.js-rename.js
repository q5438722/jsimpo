export default function ({ error: e }) {
  e({ message: "Middleware Error", statusCode: 505 });
}
