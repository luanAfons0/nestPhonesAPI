import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
    // KEYS
    private apiKeys: string[] = [
        process.env.API_KEY1,
        process.env.API_KEY2,
    ];
    validateApiKey(apiKey: string) {
        return this.apiKeys.find(apiK => apiKey === apiK);
    }
}