interface Driver {
  database: string
  password: string
  port: number

  connect(): void
  disconnect(): void
  isConnected(name: string): boolean
}

// interface usada como tipado de una variable
// const driver: Driver = {
//   database: "db",
//   password: "1234",
//   port: 23,
// }

// Interface usada como Contrato para una Clase

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {
    throw new Error("Method not implemented.")
  }
  disconnect(): void {
    throw new Error("Method not implemented.")
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.")
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {
    throw new Error("Method not implemented.")
  }
  disconnect(): void {
    throw new Error("Method not implemented.")
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.")
  }
}
