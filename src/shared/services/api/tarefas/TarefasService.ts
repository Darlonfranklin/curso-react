import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar todos os dados.');
    }

};

const getById = async (id: number): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao buscar dado.');
    }
};

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post<any>('/tarefas', dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar dados.');
    }
};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa[] | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar dados.');
    }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ApiException(error.message || 'Erro ao deletar dados.');
    }
};

export const TarefaService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};