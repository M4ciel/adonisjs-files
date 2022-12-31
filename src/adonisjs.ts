export type AdonisFile = {
    fileName: string;
    filePath: string;
    fileType: FileType;
};

export enum FileType {
    command = "commands",
    controller = "app\\Controllers\\Http",
    enum = "Enum",
    exceptions = "app\\Exceptions",
    factories = "database\\factories",
    listener = "app\\Listeners",
    middleware = "app\\Middleware",
    migrations = "database\\migrations",
    models = "app\\Models",
    preload = "prldfile",
    provider = "Provider",
    seeders = "database\\seeders",
    service = "Services",
    suite = "Suite",
    test = "Test",
    validator = "Validator",
    view = "View",
}
