export type AdonisFile = {
    fileName: string;
    filePath: string;
    fileType: FileType;
};

export enum FileType {
    command = "commands",
    controller = "app\\Controllers\\Http",
    exceptions = "app\\Exceptions",
    factories = "database\\factories",
    listener = "app\\Listeners",
    middleware = "app\\Middleware",
    migrations = "database\\migrations",
    models = "app\\Models",
    provider = "providers",
    seeders = "database\\seeders",
    suite = "tests",
    test = "tests\\",
    validator = "app\\Validators",
    view = "resources\\views",
}
