export default abstract class AbstractService
{
    protected abstract model: any;

    public constructor()
    {

    }

    public all(params?: {})
    {
        return [
            {
                name: 'user name',
            }
        ];
    }

    public store(data: {}): {}
    {
        return {
            name: 'user name',
        };
    }
}
