import confi from "../confi/confi.js";
import { Client, ID, Databases, Query, Storage } from 'appwrite'

export class Service {
    client = new Client()

    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(confi.appwriteUrl)
            .setProject(confi.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                confi.appwriteDatabaseID,
                confi.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.databases.updateDocument(
                confi.appwriteDatabaseID,
                confi.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )

        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                confi.appwriteDatabaseID,
                confi.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                confi.appwriteDatabaseID,
                confi.appwriteCollectionId,
                slug,
            )

        } catch (error) {
            throw error
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", 'active')]) {
        try {
            return await this.databases.listDocuments(
                confi.appwriteDatabaseID,
                confi.appwriteCollectionId,
                queries,
            )
        } catch (error) {

        }
    }

    ///////file upload//////////

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                confi.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                confi.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            confi.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service 