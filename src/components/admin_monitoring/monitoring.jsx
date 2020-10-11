import React from 'react';
import { Table, Tag, Space } from 'antd';
import styles from './monitoring.module.scss';

const Monitoring = () => {
  const fakeLogs = [
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:53:10',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:58',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:32',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:27',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:05',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:05',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:05',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 11:50:05',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 09:50:05',
    },
    {
      usedId: '1',
      ip: '46.160.253.84',
      request_log:
        '{"status":200,"data":{"id":1,"first_name:Ira,last_name:Drov,email":"test@test.com","reset_password_token":null,"reset_password_created_at":null,"stripe_id":"cus_HEWpZuAKEvZJQi","card_brand":null,"card_last_four":null,"trial_ends_at":null,"timezone:Europe\\/Moscow","roles":[],"account":{"id":1,"name":"Test","stores_count":2}}}',
      user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
      fingerprint:
        '96ac79fee9c502d6ad996d36eb86f483ec12f0a30b99098aac42cbded89a25a8',
      created_at: '2020-10-11 09:50:05',
    },
  ];
  const columns = [
    {
      title: 'UserID',
      dataIndex: 'usedId',
      key: 'usedId',
      width: 5,
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
      width: 10,
    },
    {
      title: 'Лог запросов',
      dataIndex: 'request_log',
      key: 'request_log',
      width: 25,
    },
    {
      title: 'User agent',
      dataIndex: 'user_agent',
      key: 'user_agent',
      width: 20,
    },
    {
      title: 'Слепок пользователя',
      dataIndex: 'fingerprint',
      key: 'fingerprint',
      width: 10,
    },
    {
      title: 'Время создания',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 10,
    },
  ];
  return (
    <div className={styles.tab}>
      <Table
        className={styles.scroll}
        scroll={{ y: 800 }}
        columns={columns}
        dataSource={fakeLogs}
        pagination={false}
      />
    </div>
  );
};

export default Monitoring;
