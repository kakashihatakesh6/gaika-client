import api from './api';
import { Hero, Blog } from '@/types';

// Hero Services
export const getHeroes = async (): Promise<Hero[]> => {
    const response = await api.get<Hero[]>('/hero');
    return response.data;
};

export const createHero = async (data: Partial<Hero>): Promise<Hero> => {
    const response = await api.post<Hero>('/hero', data);
    return response.data;
};

export const updateHero = async (id: string, data: Partial<Hero>): Promise<Hero> => {
    const response = await api.put<Hero>(`/hero/${id}`, data);
    return response.data;
};

export const deleteHero = async (id: string): Promise<{ message: string }> => {
    const response = await api.delete<{ message: string }>(`/hero/${id}`);
    return response.data;
};

// Blog Services
export const getBlogs = async (): Promise<Blog[]> => {
    const response = await api.get<Blog[]>('/blogs');
    return response.data;
};

export const getBlogBySlug = async (slug: string): Promise<Blog> => {
    const response = await api.get<Blog>(`/blogs/${slug}`);
    return response.data;
};

export const createBlog = async (data: Partial<Blog>): Promise<Blog> => {
    const response = await api.post<Blog>('/blogs', data);
    return response.data;
};

export const updateBlog = async (id: string, data: Partial<Blog>): Promise<Blog> => {
    const response = await api.put<Blog>(`/blogs/${id}`, data);
    return response.data;
};

export const deleteBlog = async (id: string): Promise<{ message: string }> => {
    const response = await api.delete<{ message: string }>(`/blogs/${id}`);
    return response.data;
};
