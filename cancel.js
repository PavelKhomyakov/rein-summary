kintone.events.on(["app.record.edit.submit"], async (event) => {
    const record = event.record;

    if (record.確認OK.value === "OK") {
        try {
            await fetchRecords(record);
        } catch (error) {
            console.error(error);
        }
    }

    return event;
});

const fetchRecords = async (record) => {
    const email = record.Email.value;
    const requestCount = record.リクエスト数.value;

    const query = `E_mail = "${email}" and リクエスト数 = "${requestCount}"`;
    const resp = await kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', { app: 4683, query });

    const extractedIds = resp.records.map(record => parseInt(record.$id.value));
    await updateStatus(extractedIds);
};

const updateStatus = async (extractedIds) => {
    const newList = extractedIds.map(id => ({
        'id': id,
        'record': {
            '審査状況': { 'value': '申込キャンセル' }
        }
    }));

    const updateBody = { 'app': 4683, 'records': newList };

    try {
        await kintone.api(kintone.api.url('/k/v1/records.json', true), 'PUT', updateBody);
    } catch (error) {
        console.error("Failed to update records:", error);
    }
};
