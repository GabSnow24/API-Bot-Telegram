import prismaClient from "../prisma";

class GroupServices {
  async create(data: any) {
    try {
      const user = await prismaClient.group.create({
        data: data,
      });
      return user;
    } catch (error) {
      const responseError = { created: false, message: 'Não foi possível criar o cliente'}
      return responseError
    }
  }

  async readOne(ID: any) {
    try {
      const data = await prismaClient.group.findUnique({
      where: {
        id: ID,
      },
    });
    return data;
    } catch (error) {
      const responseError = { read: false, message: 'Não foi possível ler os dados'}
      return responseError
    }
  }

  async readAll(datas:any) {
    try {
      const data = await prismaClient.group.findMany({
        orderBy: {
          created_at: "desc"
        }
      });
      return data;
    } catch (error) {
      const responseError = { read: false, message: 'Não foi possível ler os dados dos clientes'}
      return responseError
    }
  }

  async update(ID: any, data: any) {
    try {
      const user = await prismaClient.group.update({
        data: data,
        where: {
          id: ID
        },
      });
      return user;
    } catch (error) {
      const responseError = { updated: false, message: 'Não foi possível atualizar o cliente'}
      return responseError
    }
  }

  async delete(ID: any) {
    try {
      const data = await prismaClient.group.delete({
        where: {
          id: ID
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível deletar o cliente'}
      return responseError
    }
  }

}

export { GroupServices };
